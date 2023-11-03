import { useRouter } from 'vue-router'
const router = useRouter()
 
export const toPage = (url: string) => {
  router.push(url)
}


export const getBase64Image = (img: any) => {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
}

