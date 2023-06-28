var wms_layers = [];

var lyr_TopografiskaWebbkartanNedtonad_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://karta.kungsbacka.se/geoserver/wms/wms?amp;request%3DGetCapabilities",
    attributions: ' ',
                              params: {
                                "LAYERS": "kba:topowebbkartan_nedtonad",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Topografiska Webbkartan Nedtonad",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TopografiskaWebbkartanNedtonad_0, 0]);
var format_Befintligestolpar220kVHallsbergTimmersdala_1 = new ol.format.GeoJSON();
var features_Befintligestolpar220kVHallsbergTimmersdala_1 = format_Befintligestolpar220kVHallsbergTimmersdala_1.readFeatures(json_Befintligestolpar220kVHallsbergTimmersdala_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Befintligestolpar220kVHallsbergTimmersdala_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Befintligestolpar220kVHallsbergTimmersdala_1.addFeatures(features_Befintligestolpar220kVHallsbergTimmersdala_1);
var lyr_Befintligestolpar220kVHallsbergTimmersdala_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Befintligestolpar220kVHallsbergTimmersdala_1, 
                style: style_Befintligestolpar220kVHallsbergTimmersdala_1,
                interactive: true,
                title: '<img src="styles/legend/Befintligestolpar220kVHallsbergTimmersdala_1.png" /> Befintlige stolpar 220 kV Hallsberg-Timmersdala'
            });

lyr_TopografiskaWebbkartanNedtonad_0.setVisible(true);lyr_Befintligestolpar220kVHallsbergTimmersdala_1.setVisible(true);
var layersList = [lyr_TopografiskaWebbkartanNedtonad_0,lyr_Befintligestolpar220kVHallsbergTimmersdala_1];
lyr_Befintligestolpar220kVHallsbergTimmersdala_1.set('fieldAliases', {'SVK_STO_ID': 'SVK_STO_ID', });
lyr_Befintligestolpar220kVHallsbergTimmersdala_1.set('fieldImages', {'SVK_STO_ID': '', });
lyr_Befintligestolpar220kVHallsbergTimmersdala_1.set('fieldLabels', {'SVK_STO_ID': 'no label', });
lyr_Befintligestolpar220kVHallsbergTimmersdala_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});