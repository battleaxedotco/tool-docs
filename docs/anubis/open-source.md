# Open source

Anubis utilizes a binary of the open source project [FFmpeg](http://ffmpeg.org) and the [libx264](https://www.videolan.org/developers/x264.html) library. This binary is released under the [GNU GPL](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) license. Its unmodified source code is available [here](https://github.com/FFmpeg/FFmpeg).

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