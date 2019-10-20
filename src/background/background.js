var color=255;
var step=10;


function themeWindow(window) {
    browser.theme.update(window.id,
    {
      images:
      {
	theme_frame: "resources/background.png",
	additional_backgrounds: ["resources/anim.svg"]
      },
      properties:
      {
	additional_backgrounds_alignment: ["right top"],
	additional_backgrounds_tiling: ["repeat"]
      },
      colors: {
       frame: [ color, color, 0],
       tab_background_ext: "#0099FF",
       toolbar_text: "cyan",
       toolbar_field: "orange",
       toolbar_field_text: "green",
       toolbar_top_separator: "red",
       toolbar_bottom_separator: "white",
       toolbar_vertical_separator: "white"
      }
    });
}


function loop()
{
  browser.windows.onCreated.addListener(themeWindow);
  browser.windows.getAll().then(wins => wins.forEach(themeWindow));

  color = color + step;
  if (color>255)
    color=0;

}


setInterval(loop, 40);
