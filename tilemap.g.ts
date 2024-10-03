// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level2":return tiles.createTilemap(hex`11001100050606060911111107110a06060606060911111104081111010702081111110111080111110a0f11110a07060e060911111108111111080b06100c071111040d0606060f0a06060c1101081107110111080211110808110111021108110711111108010a060c0b06061006060e06070606060e060f111111111108111111110711110211010d0609110a060e0901110a0706060606060c03081108110308110a0c070111111111111108110801110b060c020711110a060610060f11081111111111110711110801110811080a0c11110a0606060706060e06060f110808110311081111110711111102110811080d0606100c01111107011111111108110808010108110a06060706060609110811080b06060e060c1111071111020b060e0605`, img`
. . . . . . . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . 2 . . . 
. . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . . 2 . 
. . . 2 . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,sprites.builtin.coral1,sprites.vehicle.roadHorizontal,myTiles.tile1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection3,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
