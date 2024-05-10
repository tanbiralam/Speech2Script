# Speech2Text

Speech2Text is a web application designed for transcribing speech to text. It provides an intuitive interface for users to upload audio files and receive their transcribed text output. The app employs powerful models from Hugging Face to ensure accurate and efficient transcription. It is capable of translating the audio clip upto 200+ languages. It uses Xenova Transformers which is a Hugging Face's transformers python library, meaning it can run the same pretrained models in user's browser.

## [Live View](https://speech2script.vercel.app/)

## Used Models

The Speech2Text application utilizes the following models for transcription:

- **Whisper Tiny (English)**: Model name: `openai/whisper-tiny.en`
- **Whisper Tiny**: Model name: `openai/whisper-tiny`
- **Whisper Base**: Model name: `openai/whisper-base`
- **Whisper Base (English)**: Model name: `openai/whisper-base.en`
- **Whisper Small**: Model name: `openai/whisper-small`
- **Whisper Small (English)**: Model name: `openai/whisper-small.en`

## Components

The components folder include Transcribing, Transcription, and Translation, each serving a specific role in the transcription process. Additionally, utility files such as presets.js, translate.worker.js, and whisper.worker.js handle preset configurations, translation, and transcription tasks asynchronously.

1.  Transcribing.jsx: This component manages the display of the transcription process, providing visual feedback on the progress of transcription.

2.  Transcription.jsx: Responsible for displaying the transcribed text.

3.  Translation.jsx: Enables translation of the transcribed text into different languages, allowing users to select the target language and trigger the translation process.

## Utilities

1.presets.js: Contains preset configurations used across the project, including message types, loading status, model names, and supported languages.

2.translate.worker.js: Handles translation tasks asynchronously using the Xenova transformers library.

3.whisper.worker.js: Manages the transcription process asynchronously using the Xenova transformers library for automatic speech recognition.

## Dependencies

- [@xenova/transformers](https://www.npmjs.com/package/@xenova/transformers)
- [React](https://reactjs.org/)
- [React DOM](https://reactjs.org/docs/react-dom.html)
- [TailwindCSS](https://tailwindcss.com/)

## Usage

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.
4. Build the project for production with `npm run build`.

## License

This project is licensed under the [MIT License](LICENSE).
