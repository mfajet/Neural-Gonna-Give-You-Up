export function uploadSuccess({data}) {
	return {
		type: 'Upload_document_success',
		data,
	};
}

export function uploadSuccess({data}) {
	return {
		type: 'Upload_document_success',
		data,
	};
}

export function uploadDocumentRequest({file, name}){
	let data = new FormData();
	data.append('file', document);
	data.append('name', name);

	return (dispatch) => {
		axios.post('/files', data)
			.then(response => dispatch(uploadSuccess(response))
			.catch(error => dispatch(uploadFail(error));
	};
}

handleFileUpload({file}) {
	const file = files[0];
	this.props.actions.uploadRequest({
		file,
		name: 'Awesome Cat Pic'
	})
}

<input type="file" onChange={this.handleFileUpload} />
