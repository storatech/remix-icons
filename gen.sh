rm fonts/*
mkdir fonts
mkdir .tempicons
mkdir .tempicons/filled

# node gen classes <json-defs> <fontName> <packageName> <className> <outputFile>

cp -r ./icons/regular/* ./.tempicons/
cp -r ./icons/filled/* ./.tempicons/filled/

# rename all files in .tempicons/filled to have a -filled suffix
for file in ./.tempicons/filled/* ; do
    mv "$file" "${file%.svg}-filled.svg"
done

cp -r ./.tempicons/filled/* ./.tempicons/
rm -rf ./.tempicons/filled

fantasticon ./.tempicons -o fonts -t ttf -g json -n "StoraRemixIcons" --normalize
node gen-dart-classes "fonts/StoraRemixIcons.json" "Stora Remix Icons" "remix_icons_flutter" "StoraRemixIcons" "fonts/stora_remix_icons.dart"

cp -r fonts/*.ttf ./remix_icons_flutter/fonts/
mv fonts/*.dart ./remix_icons_flutter/lib/src/

# node gen-ts-obj <variantCount> <variantJson : 0> <variantName : 0> <variantJson : 1> <variantName : 1> ... <outputFile>
node gen-ts-obj 1 "./fonts/StoraRemixIcons.json" "regular" "./remix_icons_react/codepoints.ts"

node update-ver

rm -rf .tempicons

cd remix_icons_flutter

cd ../remix_icons_react
npm install
npm run build
rm -rf .tempicons