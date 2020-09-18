import React, { Component } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'

class UploadImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleOnChange(e) {
        console.log('I was triggered during onChange');
        this.setState({ selectedFile: e.target.files[0] }, () => console.log('file', this.state.selectedFile));
    }

    handleUpload(e) {
        e.preventDefault();
        const formData = new FormData();
        console.log('upfile', this.state.selectedFile)
        formData.append(
            'file', this.state.selectedFile,
            this.state.selectedFile.name
        );
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((data) =>  {
                console.log('request succeeded with JSON response', data)
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    fileData() {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };
    render() {
        console.log('I was triggered during render')
        return (
            <div>
                <h1>Upload Image</h1>
                <Form>
                <Row>
                    <Col>
                        <input type='file' onChange={this.handleOnChange} name='file'/>
                    </Col>
                </Row>
                </Form>
                <Button variant='primary' type="submit" onClick={this.handleUpload}>
                    Upload
                </Button>
            </div>
        )
    }
}

export default UploadImage

