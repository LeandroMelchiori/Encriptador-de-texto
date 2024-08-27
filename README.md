# Encriptador-de-texto

## Descripción

Este proyecto es una aplicación web sencilla que permite encriptar y desencriptar textos utilizando un conjunto de "llaves" de encriptación específicas. Está diseñada para facilitar el intercambio de mensajes secretos entre usuarios que conocen el sistema de encriptación utilizado.

## Funcionalidades

- **Encriptar Texto:** Convierte un texto ingresado por el usuario en su versión encriptada.
- **Desencriptar Texto:** Convierte un texto encriptado de vuelta a su forma original.
- **Copiar Texto:** Opción para copiar el texto encriptado o desencriptado al portapapeles con un solo clic.
- **Validación de Entrada:** Funciona solo con letras minúsculas, sin soportar letras con acentos ni caracteres especiales.

## Llaves de Encriptación

El proceso de encriptación se realiza mediante la sustitución de vocales en el texto con los siguientes códigos:

- **e** se convierte en **enter**
- **i** se convierte en **imes**
- **a** se convierte en **ai**
- **o** se convierte en **ober**
- **u** se convierte en **ufat**

Ejemplo:
- Texto original: `gato`
- Texto encriptado: `gaitober`

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **index.html:** Estructura HTML de la aplicación.
- **styles.css:** Estilos CSS para el diseño y presentación de la página.
- **script.js:** Lógica JavaScript que maneja la encriptación, desencriptación, y otras interacciones de la aplicación.
