enum EImageFormat {
	Png = 'png',
	Jpeg = 'jpeg'
}

interface IResolution {
	width: number;
	height: number;
}

interface IImageConversion extends IResolution {
	format: EImageFormat;
}

class ImageBuilder {
	private formatList: EImageFormat[] = [];
	private resolutionList: IResolution[] = [];

	addPng(): ImageBuilder {
		if (!this.formatList.includes(EImageFormat.Png)) this.formatList.push(EImageFormat.Png);
		return this;
	}

	addJpeg(): ImageBuilder {
		if (!this.formatList.includes(EImageFormat.Jpeg)) this.formatList.push(EImageFormat.Jpeg);
		return this;
	}

	addJpg(): ImageBuilder {
		if (!this.formatList.includes(EImageFormat.Jpeg)) this.formatList.push(EImageFormat.Jpeg);
		return this;
	}

	addResolution(width: number, height: number): ImageBuilder {
		this.resolutionList.push({
			width,
			height
		});
		return this;
	}

	build(): IImageConversion[] {
		const res: IImageConversion[] = [];
		for (const resolution of this.resolutionList) {
			res.push(
				...this.formatList.map(format => (
					{
						format,
						...resolution,
					}
				))
			)
		}

		return res;
	}

}

const imageBuilder = new ImageBuilder();
const resOfBuild = imageBuilder
	.addJpeg()
	.addPng().addResolution(512, 512)
	.addJpeg().addResolution(126, 512).addResolution(18, 18)
	.build();

console.log("resOfBuild::",resOfBuild);