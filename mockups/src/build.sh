#!/bin/zsh
# Build the self-contained mockups in ../ from the sources here: inlines data.js and the logo SVG.
cd ${0:A:h}
for f in *.src.html; do
  python3 -I -c '
import sys,re
s=open(sys.argv[1]).read(); d=open("data.js").read()
svg=open("../assets/logo.svg").read().replace("\n"," ").replace("\x27","&#39;")
svg=re.sub(r"^.*?<svg","<svg",svg,flags=re.S)
def rep(m):
    return svg.replace("<svg",f"<svg class=\"logo-img\" role=\"img\" aria-label=\"New England Drupal Camp\" width=\"{m.group(1)}\"",1)
s=re.sub(r"<img class=\"logo-img\" src=\"assets/logo.svg\" alt=\"New England Drupal Camp\" width=\"(\d+)\" height=\"\d+\">",rep,s)
s=s.replace("<!--DATA-->",d)
assert "assets/logo.svg" not in s
open(sys.argv[2],"w").write(s)' $f ../${f%.src.html}.html
done
