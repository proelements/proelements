import { DropZone, Dialog, Checkbox } from '@elementor/app-ui';
import { Context as TemplatesContext, TemplatesProvider } from '../context/templates';
import BackButton from '../molecules/back-button';
import { useConfirmAction as useConfirmActionBase } from '@elementor/hooks';

// The hook `useConfirmAction` comes from the core plugin, so it is possible that it is not available.
const useConfirmActionFallback = ( { action } ) => ( {
	runAction: action,
	dialog: { isOpen: false },
} );

const useConfirmAction = useConfirmActionBase ?? useConfirmActionFallback;

export default function Import() {
	const { importTemplates, action, resetActionState } = React.useContext( TemplatesContext ),
		[ importedTemplate, setImportedTemplate ] = React.useState( null ),
		isImport = React.useMemo( () => action.current === TemplatesProvider.actions.IMPORT, [ action ] ),
		isUploading = React.useMemo( () => isImport && action.loading, [ action ] ),
		hasError = React.useMemo( () => isImport && action.error, [ action ] );

	const upload = React.useCallback( ( file ) => {
		if ( isUploading ) {
			return;
		}

		readFile( file )
			.then( ( fileData ) => importTemplates( { fileName: file.name, fileData } ) )
			.then( ( response ) => {
				// For now it show a dialog for the first template ONLY!
				setImportedTemplate( response.data[ 0 ] );
			} );
	}, [] );

	const {
		runAction: uploadFile,
		dialog,
		checkbox,
	} = useConfirmAction( {
		doNotShowAgainKey: 'upload_json_warning_generic_message',
		action: upload,
	} );

	return (
		<section className="site-editor__import">
			{
				importedTemplate &&
					<Dialog
						title={ __( 'Your template was imported', 'elementor-pro' ) }
						approveButtonText={ __( 'Preview', 'elementor-pro' ) }
						approveButtonUrl={ importedTemplate.url }
						approveButtonTarget="_blank"
						dismissButtonText={ __( 'Edit', 'elementor-pro' ) }
						dismissButtonUrl={ importedTemplate.editURL }
						dismissButtonTarget="_top"
						onClose={ () => setImportedTemplate( null ) }
					/>
			}
			{
				hasError &&
					<Dialog
						title={ action.error }
						approveButtonText={ __( 'Learn More', 'elementor-pro' ) }
						approveButtonUrl="https://go.elementor.com/app-theme-builder-import-issue"
						approveButtonTarget="_blank"
						approveButtonColor="link"
						dismissButtonText={ __( 'Go Back', 'elementor-pro' ) }
						dismissButtonOnClick={ resetActionState }
						onClose={ resetActionState }
					/>
			}
			{
				dialog.isOpen &&
					<Dialog
						title={ __( 'Warning: JSON or ZIP files may be unsafe', 'elementor-pro' ) }
						text={ __( 'Uploading JSON or ZIP files from unknown sources can be harmful and put your site at risk. For maximum safety, upload only JSON or ZIP files from trusted sources.', 'elementor-pro' ) }
						approveButtonColor="link"
						approveButtonText={ __( 'Continue', 'elementor-pro' ) }
						approveButtonOnClick={ dialog.approve }
						dismissButtonText={ __( 'Cancel', 'elementor-pro' ) }
						dismissButtonOnClick={ dialog.dismiss }
						onClose={ dialog.dismiss }
					>
						<label htmlFor="do-not-show-upload-json-warning-again" style={ { display: 'flex', alignItems: 'center', gap: '5px' } }>
							<Checkbox
								id="do-not-show-upload-json-warning-again"
								type="checkbox"
								value={ checkbox.isChecked }
								onChange={ ( event ) => checkbox.setIsChecked( !! event.target.checked ) }
							/>
							{ __( 'Do not show this message again', 'elementor-pro' ) }
						</label>
					</Dialog>
			}
			<BackButton />
			<DropZone
				heading={ __( 'Import Template To Your Library', 'elementor-pro' ) }
				text={ __( 'Drag & Drop your .JSON or .zip template file', 'elementor-pro' ) }
				secondaryText={ __( 'or', 'elementor-pro' ) }
				onFileSelect={ uploadFile }
				isLoading={ isUploading }
				filetypes={ [ 'zip', 'json' ] }
			/>
		</section>
	);
}

function readFile( file ) {
	return new Promise( ( ( resolve ) => {
		const fileReader = new FileReader();

		fileReader.readAsDataURL( file );

		fileReader.onload = ( event ) => {
			// Replace the mime type that prepended to the base64 with empty string and return a
			// resolved promise only with the base64 string.
			resolve( event.target.result.replace( /^[^,]+,/, '' ) );
		};
	} ) );
}
