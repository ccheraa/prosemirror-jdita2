import { xditaToJson } from "jdita";
import { document } from "../document";
let xml: string;
xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic PUBLIC "-//OASIS//DTD LIGHTWEIGHT DITA Topic//EN" "lw-topic.dtd">
<topic id="program-bulbs-to-groups">
  <title>Programming Light Bulbs to a Lighting Group</title>
  <shortdesc>You can program one or more light bulbs to a lighting group to operate that group
    with your remote control.</shortdesc>
  <body>
    <section id="context">
      <p>Your <ph keyref="product-name"/> remote control can manage up to <data>250 network light bulbs on the same lighting
      network</data>. When you add a light bulb to the network, you can program it to one or more
        lighting groups. You must assign a light bulb to at least one lighting group to
        operate that light bulb  A network light bulb that is not programmed to a
        lighting group will still operate when controlling all network light bulbs from
        the remote control.</p>
    </section>
    <section id="demo">
      <video width="640" height="360">
        <desc>Your browser does not support the video tag.</desc>
        <video-poster value="https://img.gkbcdn.com/p/2018-11-14/xiaomi-yeelight-yldp06yl-smart-light-bulb-white-1574132915782._w500_.jpg" />
        <media-controls />
        <media-autoplay />
        <media-muted />
        <media-source value="movie.mp4" />
        <media-source value="movie.ogg" />
      </video>
    </section>
    <section id="steps">
   <ol>
     <li><p>Make sure your remote control is in range of the light bulbs you are
        adding.</p></li>
     <li><p>If a network light bulb is new, you must install it by performing the following
          steps:</p>
          <ol>
            <li><p>Make sure power to the fixture where you are installing the light bulb
              is turned OFF.</p>
            </li>
              <li><p>Remove any existing light bulb from the light fixture.</p></li>
              <li><p>Install the network light bulb into the light fixture as you would any
              standard light bulb.</p></li>
              <li><p>Turn power to the light fixture on.</p>
              <p>The light bulb begins to brighten and dim while finding the
              remote control's network.</p></li>
          <li><p>Repeat steps for each new network light bulb.</p></li>
          </ol></li>
        <li><p>Turn power on to the fixtures containing network light bulbs you want added to
          the light group.</p></li>
          <li><p>Turn power off to the fixtures containing light bulbs you do not want added to
          the light group. </p></li>
          <li><p>On the remote control, press and hold the desired lighting group button for 5
          seconds.</p>
        <p>The button indicator for the selected lighting group flashes green while
          the light bulb(s) are added to the group. If the indicator flashes red, the
          lighting group was not activated and you must try again. Light flashes red for 3
          seconds if programming fails.</p>
      </li>
      <li><p>Leave the light fixture switches ON so that power is available when using your
          remote control to turn the light bulbs on and off.</p></li>
      <li><p>remember to turn on any excluded fixtures that you turned off.</p></li>
    </ol>
    </section>

  </body>
</topic>
`;
const file = localStorage.getItem('file');
if (file) {
  xml = file;
  localStorage.setItem('file', '');
}
export default xditaToJson(xml, true).then(json => document(json)) as Promise<Record<string, any>>;