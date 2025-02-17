# Audio Transcribe

This project is a full-stack application for transcribing audio files to text using Spring Boot for the backend and React with TypeScript for the frontend.


### Backend - `audio-transcribe`

The backend is a Spring Boot application that provides an API for audio transcription using OpenAI's Whisper model.

#### Key Files

- `pom.xml`: Maven configuration file.
- `src/main/java/com/audio/transcribe/AudioTranscribeApplication.java`: Main application class.
- `src/main/java/com/audio/transcribe/TranscriptionController.java`: REST controller for handling audio transcription requests.
- `src/main/resources/application.properties`: Configuration properties for the application.

#### Running the Backend

To run the backend, use the Maven wrapper script:

```sh
cd audio-transcribe
./mvnw spring-boot:run
```

### Frontend - `audio-transcribe-frontend`

The frontend is a React application that provides a simple user interface for uploading audio files and displaying the transcribed text.

#### Key Files

- `package.json`: NPM configuration file.
- `src/App.tsx`: Main application component.
- `src/components/AudioUploader.tsx`: Component for uploading audio files and displaying transcribed text.

#### Running the Frontend

To run the frontend, use the following commands:

```sh
cd audio-transcribe-frontend
npm install
npm run dev
```

### API Documentation

The backend API provides the following endpoints:

POST `/api/transcribe`: Endpoint for uploading an audio file and receiving the transcription result.

### Configuration

The backend application requires the following configuration properties:

```sh
spring.application.name=audio-transcribe
spring.ai.openai.api-key={API_KEY}
spring.ai.openai.audio.transcription.base-url=https://api.openai.com
spring.ai.openai.audio.transcription.options.model=whisper-1
spring.ai.openai.audio.transcription.options.response-format=json
```

Replace `{API_KEY}` with your OpenAI API key.

### Dependencies

The project uses the following dependencies:

- Spring Boot
- OpenAI API
- Spring AI
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
