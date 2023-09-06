---
title: Setting the Default Sound Source and Sink on Ubuntu
date: 2023-09-16 00:00:00 -0600
categories:
  - audio
  - pulse audio
  - bash
  - pactl
cover: /img/pulseaudio.png
---

If your a modern worker you probably do a lot of video calls and it's really annoying when your default audio and video inputs and outputs change on rebooting your computer. Windows is actually pretty good at remembering your last choice and setting the appropiate defaults on reboot. However, Linux doesn't do anything here, so you're at the mercy of randomness unless you have a script to set the default for you. Below is

```bash
#!/usr/bin/env bash

sleep 5

pactl=$(which pactl)
if [[ -x "$pactl" ]]
then
  SINK=`pactl list short sinks | grep C-Media -c`
  SOURCE=`pactl list short sources | grep -e "input.*Yeti" -c`
  if [[ $SOURCE = 1 ]] && [[ $SINK = 1 ]]
  then
    echo "Setting Audio Source and Sink"
    pactl set-default-source alsa_input.usb-Blue_Microphones_Yeti_Stereo_Microphone_797_2018_04_08_82286-00.analog-stereo
    pactl set-default-sink alsa_output.usb-C-Media_Electronics_Inc._USB_Audio_Device-00.analog-stereo
  fi
fi
```
