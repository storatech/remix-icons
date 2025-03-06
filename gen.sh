mkdir fonts
rm fonts/*

# node gen classes <json-defs> <fontName> <packageName> <className> <outputFile>

fantasticon ./icons/filled -o fonts -t ttf -g json -n "Remix-filled" --normalize
node gen-dart-classes "fonts/Remix-filled.json" "Remix Icons Filled" "remix_icons_flutter" "RemixFilled" "fonts/remix_filled.dart"

fantasticon ./icons/regular -o fonts -t ttf -g json -n "Remix-regular" --normalize
node gen-dart-classes "fonts/Remix-regular.json" "Remix Icons Regular" "remix_icons_flutter" "RemixRegular" "fonts/remix_regular.dart"

cp -r fonts/*.ttf ../fonts/icons/
cp -r fonts/*.ttf ./remix_icons_flutter/fonts/
mv fonts/*.dart ./remix_icons_flutter/lib/src/

# node gen-ts-obj <variantCount> <variantJson : 0> <variantName : 0> <variantJson : 1> <variantName : 1> ... <outputFile>
node gen-ts-obj 2 "./fonts/Remix-filled.json" "filled" "./fonts/Remix-regular.json" "regular" "./remix_icons_react/codepoints.ts"

node update-ver

cd remix_icons_flutter

cd ../remix_icons_react
npm install
npm run build