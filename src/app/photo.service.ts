import { Camera, CameraResultType } from '@capacitor/camera';

export class PhotoService {

	// Intégration fonctionnalité plugin Camera de Capacitor
	/*
	Commande à exécuter pour l'installation du plugin Camera
		npm install @capacitor/camera 
		npm install @ionic/pwa-elements
		 npm install @capacitor/preferences
        npm install @capacitor/filesystem
	*/

	public photosCamera = [];

	public async takePicture() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri
		});

		this.photosCamera.unshift(
			{
				filepath: "img-" + Date.now(),
				webviewPath: image.webPath
			}
		)
	}
}

