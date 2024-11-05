import React from "react";
import { Image } from "react-native";

export const Image1 = ()=>(<Image source={require('../img/icon_folder.png')} />);

export const Image2 = (props)=>{
    const icon = props.active
    ? require('../img/icon_folder.png')
    : require('../img/icon_folder_inactive.png')
    return <Image source={icon} />;
}

export const Image3 = ()=>(
    <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />
);



/*
#####    Para usar imagenes del asset de Xcode:    ######

<Image
  source={{uri: 'app_icon'}}
  style={{width: 40, height: 40}}
/>

#####    para usar imagenes del asset de Android     #####

<Image
  source={{uri: 'asset:/app_icon.png'}}
  style={{width: 40, height: 40}}
/>


#####     Imagen desde direccion web o servidor     #####

<Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />

<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{width: 400, height: 400}}
/>

####   Con imagen codificada  ####
<Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  }}
/>


#####   Si queremos usar imagenes cargadas en Cache, Solo para iOS    ########

<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    cache: 'only-if-cached',
  }}
  style={{width: 400, height: 400}}
/>




######   Si se queiere insertar imagen de fondo en algun elemento     ######


<ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>

  


*/