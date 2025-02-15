import React, { useState } from 'react';
import axios from 'axios';

const AudioUploader = () => {
    const [file, setFile] = useState<File | null>(null);
    const [transcription, setTranscription] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8080/api/transcribe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setTranscription(response.data.transcription);
        } catch (error) {
            console.error('Error transcribing audio', error);
        }
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto mt-20 transform transition-transform hover:scale-105">
            <h1 className="text-4xl font-bold text-white mb-8">Audio to Text Transcriber</h1>
            <div className="mb-6 w-full">
                <input 
                    type="file" 
                    accept="audio/*" 
                    onChange={handleFileChange} 
                    className="block w-full text-sm text-gray-300 border border-gray-600 rounded-lg cursor-pointer bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button 
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105" 
                onClick={handleUpload}
            >
                Upload Audio File
            </button>
            {transcription && (
                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-medium text-white">Transcription Result</h2>
                    <p className="text-gray-400 mt-4">{transcription}</p>
                </div>
            )}
        </div>
    );
};

export default AudioUploader;