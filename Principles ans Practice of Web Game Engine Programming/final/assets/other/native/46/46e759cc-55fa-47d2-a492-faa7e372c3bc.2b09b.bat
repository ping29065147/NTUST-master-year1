CALL pbjs -t static-module -w commonjs --force-long -o ./gaiaProto.js ./gaiaProto.proto
CALL pbts -o ./gaiaProto.d.ts ./gaiaProto.js
CALL protoc --go_out=:./ *.proto
PAUSE