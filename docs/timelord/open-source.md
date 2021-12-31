---
title: Open source
---

# Open source

Timelord utilizes a binary of the open source project [FFmpeg](http://ffmpeg.org) and the [libx264](https://www.videolan.org/developers/x264.html) library. This binary is released under the [GNU GPL](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) license. Its unmodified source code is available [here](https://github.com/FFmpeg/FFmpeg/commits/4718d74c5888457bca49aa02187841905e259d57).

## Build configuration
FFmpeg was compiled based on [these guides](https://trac.ffmpeg.org/wiki/CompilationGuide) using the following configuration.

```
./configure  --prefix=/usr/local --enable-gpl --enable-libass \
--enable-libfreetype --enable-libmp3lame --enable-libtheora --enable-libvorbis \
--enable-libvpx --enable-libx264 --enable-libx265 --enable-libopus --enable-libxvid \
--samples=fate-suite/
```

## Usage

The binary is called from the command line with the arguments:

```
ffmpeg -y -i FILEINPATH -c:v libx264 -profile:v high -pix_fmt yuv420p -preset veryfast -crf 22 -vf "scale=WIDTH:-1, crop=trunc(iw/2)*2:trunc(ih/2)*2" FILEOUTPATH
```

## Binary path

The FFmpeg binary bundled with the extension, but may be accessed and replaced by doing a [manual installation](./#installation). From the installation path, FFmpeg may be found at:
```
/CEP/extensions/Timelord/src/ffmpeg
```

### Debug flag
Editing an unsigned Adobe extension requires enabling the *debug flag*.
- Mac: In the Terminal, type: defaults write com.adobe.CSXS.8 PlayerDebugMode 1
- Windows: Openregedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.8, then add a new entry PlayerDebugMode of type “string” with the value of “1”.

## Redistribution compliance

The FFmpeg source code is [available online](https://github.com/FFmpeg/FFmpeg/commits/4718d74c5888457bca49aa02187841905e259d57) but in complicance with GNU GPL, a copy of such source code also can be obtained from us on physical media for a period of three years after our last shipment of this product by requesting such a copy from **help@battleaxe.co** and payment of $20.00 USD with the following shipping information:

- The source code you request by name
- Product Name/ID which contains subject open source software
- Your name
- Company, Division and Attention (if you are a company or any other entities)
- Address, Zip code, Country and Telephone number
- E-mail