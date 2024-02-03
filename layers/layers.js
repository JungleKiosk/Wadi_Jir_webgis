var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Openstreetmaptracks_2 = new ol.layer.Tile({
            'title': 'Openstreetmap tracks',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://gps-a.tile.openstreetmap.org/lines/{z}/{x}/{y}.png'
            })
        });
var lyr_Elevation_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Elevation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Elevation_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1107644.394446, 3952389.668318, 1127001.617024, 3990058.369232]
                            })
                        });
var lyr_NDVIspring2021_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI - spring 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVIspring2021_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1107414.499374, 3952269.069395, 1127397.830725, 3990165.846770]
                            })
                        });
var format_Lithology_5 = new ol.format.GeoJSON();
var features_Lithology_5 = format_Lithology_5.readFeatures(json_Lithology_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lithology_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lithology_5.addFeatures(features_Lithology_5);
var lyr_Lithology_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lithology_5, 
                style: style_Lithology_5,
                interactive: true,
    title: 'Lithology<br />\
    <img src="styles/legend/Lithology_5_0.png" /> Alluvions d\'Oued<br />\
    <img src="styles/legend/Lithology_5_1.png" /> Alternances de calcaires et marnes<br />\
    <img src="styles/legend/Lithology_5_2.png" /> Argiles, dolomies, gypses et calcaires<br />\
    <img src="styles/legend/Lithology_5_3.png" /> Calcaires dolominisés beiges à gris à Inocérames e<br />\
    <img src="styles/legend/Lithology_5_4.png" /> Dépôts Eoliens<br />\
    <img src="styles/legend/Lithology_5_5.png" /> Dépots plus ou moins grossiers de la basse terrass<br />\
    <img src="styles/legend/Lithology_5_6.png" /> Dolomies massives grises à rognons de silex<br />\
    <img src="styles/legend/Lithology_5_7.png" /> Epandage de limons récents<br />\
    <img src="styles/legend/Lithology_5_8.png" /> Limons et argiles gypseux de la terrasse moyenne à<br />\
    <img src="styles/legend/Lithology_5_9.png" /> Limons rouges et beiges à concrétions calcaires<br />'
        });
var format_Landuse_6 = new ol.format.GeoJSON();
var features_Landuse_6 = format_Landuse_6.readFeatures(json_Landuse_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_6.addFeatures(features_Landuse_6);
var lyr_Landuse_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landuse_6, 
                style: style_Landuse_6,
                interactive: true,
    title: 'Landuse<br />\
    <img src="styles/legend/Landuse_6_0.png" /> CITY<br />\
    <img src="styles/legend/Landuse_6_1.png" /> FORE<br />\
    <img src="styles/legend/Landuse_6_2.png" /> OLVM<br />\
    <img src="styles/legend/Landuse_6_3.png" /> OLVP<br />\
    <img src="styles/legend/Landuse_6_4.png" /> STPJ<br />\
    <img src="styles/legend/Landuse_6_5.png" /> STPP<br />\
    <img src="styles/legend/Landuse_6_6.png" /> <br />'
        });
var format_WadiJirstreams_7 = new ol.format.GeoJSON();
var features_WadiJirstreams_7 = format_WadiJirstreams_7.readFeatures(json_WadiJirstreams_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WadiJirstreams_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WadiJirstreams_7.addFeatures(features_WadiJirstreams_7);
var lyr_WadiJirstreams_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WadiJirstreams_7, 
                style: style_WadiJirstreams_7,
                interactive: true,
                title: '<img src="styles/legend/WadiJirstreams_7.png" /> Wadi Jir - streams'
            });
var format_WadielFerd_8 = new ol.format.GeoJSON();
var features_WadielFerd_8 = format_WadielFerd_8.readFeatures(json_WadielFerd_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WadielFerd_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WadielFerd_8.addFeatures(features_WadielFerd_8);
var lyr_WadielFerd_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WadielFerd_8, 
                style: style_WadielFerd_8,
                interactive: true,
                title: '<img src="styles/legend/WadielFerd_8.png" /> Wadi el Ferd'
            });
var format_AOIWadiJirRiverBasin_9 = new ol.format.GeoJSON();
var features_AOIWadiJirRiverBasin_9 = format_AOIWadiJirRiverBasin_9.readFeatures(json_AOIWadiJirRiverBasin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOIWadiJirRiverBasin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOIWadiJirRiverBasin_9.addFeatures(features_AOIWadiJirRiverBasin_9);
var lyr_AOIWadiJirRiverBasin_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AOIWadiJirRiverBasin_9, 
                style: style_AOIWadiJirRiverBasin_9,
                interactive: true,
                title: '<img src="styles/legend/AOIWadiJirRiverBasin_9.png" /> AOI - Wadi Jir River Basin'
            });
var format_AdminastrativeBoundariesmunicipal_10 = new ol.format.GeoJSON();
var features_AdminastrativeBoundariesmunicipal_10 = format_AdminastrativeBoundariesmunicipal_10.readFeatures(json_AdminastrativeBoundariesmunicipal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdminastrativeBoundariesmunicipal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdminastrativeBoundariesmunicipal_10.addFeatures(features_AdminastrativeBoundariesmunicipal_10);
var lyr_AdminastrativeBoundariesmunicipal_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdminastrativeBoundariesmunicipal_10, 
                style: style_AdminastrativeBoundariesmunicipal_10,
                interactive: true,
                title: '<img src="styles/legend/AdminastrativeBoundariesmunicipal_10.png" /> Adminastrative Boundaries - municipal'
            });
var format_City_11 = new ol.format.GeoJSON();
var features_City_11 = format_City_11.readFeatures(json_City_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_City_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_City_11.addFeatures(features_City_11);
var lyr_City_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_City_11, 
                style: style_City_11,
                interactive: true,
                title: '<img src="styles/legend/City_11.png" /> City'
            });

lyr_ESRIStandard_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_Openstreetmaptracks_2.setVisible(false);lyr_Elevation_3.setVisible(false);lyr_NDVIspring2021_4.setVisible(false);lyr_Lithology_5.setVisible(false);lyr_Landuse_6.setVisible(false);lyr_WadiJirstreams_7.setVisible(true);lyr_WadielFerd_8.setVisible(true);lyr_AOIWadiJirRiverBasin_9.setVisible(true);lyr_AdminastrativeBoundariesmunicipal_10.setVisible(true);lyr_City_11.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_GoogleSatellite_1,lyr_Openstreetmaptracks_2,lyr_Elevation_3,lyr_NDVIspring2021_4,lyr_Lithology_5,lyr_Landuse_6,lyr_WadiJirstreams_7,lyr_WadielFerd_8,lyr_AOIWadiJirRiverBasin_9,lyr_AdminastrativeBoundariesmunicipal_10,lyr_City_11];
lyr_Lithology_5.set('fieldAliases', {'ID': 'ID', 'CODE': 'CODE', 'NAME_': 'NAME_', 'AREA_HA': 'AREA_HA', });
lyr_Landuse_6.set('fieldAliases', {'AREA_HA': 'AREA_HA', 'VALUE': 'VALUE', 'NAME': 'NAME', 'NOTE': 'NOTE', });
lyr_WadiJirstreams_7.set('fieldAliases', {'ARCID': 'ARCID', 'GRID_CODE': 'GRID_CODE', 'FROM_NODE': 'FROM_NODE', 'TO_NODE': 'TO_NODE', 'SUBBASIN': 'SUBBASIN', 'SUBBASINR': 'SUBBASINR', 'NUMIN': 'NUMIN', 'AREAC': 'AREAC', 'LEN2': 'LEN2', 'SLO2': 'SLO2', 'WID2': 'WID2', 'DEP2': 'DEP2', 'MINEL': 'MINEL', 'MAXEL': 'MAXEL', 'SNAME': 'SNAME', });
lyr_WadielFerd_8.set('fieldAliases', {'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'TIMESTAMP': 'TIMESTAMP', 'BEGIN': 'BEGIN', 'END': 'END', 'ALTITUDEMO': 'ALTITUDEMO', 'TESSELLATE': 'TESSELLATE', 'EXTRUDE': 'EXTRUDE', 'VISIBILITY': 'VISIBILITY', 'DRAWORDER': 'DRAWORDER', 'ICON': 'ICON', });
lyr_AOIWadiJirRiverBasin_9.set('fieldAliases', {'NAME': 'NAME', 'AREA_HA': 'AREA_HA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'NAME_1': 'NAME_1', 'DESCRIPTIO': 'DESCRIPTIO', 'TIMESTAMP': 'TIMESTAMP', 'BEGIN': 'BEGIN', 'END': 'END', 'ALTITUDEMO': 'ALTITUDEMO', 'TESSELLATE': 'TESSELLATE', 'EXTRUDE': 'EXTRUDE', 'VISIBILITY': 'VISIBILITY', 'DRAWORDER': 'DRAWORDER', 'ICON': 'ICON', });
lyr_AdminastrativeBoundariesmunicipal_10.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM4_EN': 'Administrative Boundaries ', 'ADM4_AR': 'ADM4_AR', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'ADM4ALT1AR': 'ADM4ALT1AR', 'ADM4ALT2AR': 'ADM4ALT2AR', 'ADM3_EN': 'ADM3_EN', 'ADM3_AR': 'ADM3_AR', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_AR': 'ADM2_AR', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_AR': 'ADM1_AR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_AR': 'ADM0_AR', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_City_11.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'CLASSE': 'CLASSE', });
lyr_Lithology_5.set('fieldImages', {'ID': 'Range', 'CODE': 'TextEdit', 'NAME_': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Landuse_6.set('fieldImages', {'AREA_HA': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'NOTE': 'TextEdit', });
lyr_WadiJirstreams_7.set('fieldImages', {'ARCID': 'Hidden', 'GRID_CODE': 'Hidden', 'FROM_NODE': 'Hidden', 'TO_NODE': 'Hidden', 'SUBBASIN': 'TextEdit', 'SUBBASINR': 'TextEdit', 'NUMIN': 'Hidden', 'AREAC': 'TextEdit', 'LEN2': 'TextEdit', 'SLO2': 'TextEdit', 'WID2': 'TextEdit', 'DEP2': 'TextEdit', 'MINEL': 'TextEdit', 'MAXEL': 'TextEdit', 'SNAME': 'Hidden', });
lyr_WadielFerd_8.set('fieldImages', {'NAME': 'TextEdit', 'DESCRIPTIO': 'Hidden', 'TIMESTAMP': 'Hidden', 'BEGIN': 'Hidden', 'END': 'Hidden', 'ALTITUDEMO': 'Hidden', 'TESSELLATE': 'Hidden', 'EXTRUDE': 'Hidden', 'VISIBILITY': 'Hidden', 'DRAWORDER': 'Hidden', 'ICON': 'Hidden', });
lyr_AOIWadiJirRiverBasin_9.set('fieldImages', {'NAME': 'TextEdit', 'AREA_HA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'NAME_1': 'Hidden', 'DESCRIPTIO': 'Hidden', 'TIMESTAMP': 'Hidden', 'BEGIN': 'Hidden', 'END': 'Hidden', 'ALTITUDEMO': 'Hidden', 'TESSELLATE': 'Hidden', 'EXTRUDE': 'Hidden', 'VISIBILITY': 'Hidden', 'DRAWORDER': 'Hidden', 'ICON': 'Hidden', });
lyr_AdminastrativeBoundariesmunicipal_10.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_AR': 'Hidden', 'ADM4_PCODE': 'Hidden', 'ADM4_REF': 'Hidden', 'ADM4ALT1EN': 'Hidden', 'ADM4ALT2EN': 'Hidden', 'ADM4ALT1AR': 'Hidden', 'ADM4ALT2AR': 'Hidden', 'ADM3_EN': 'Hidden', 'ADM3_AR': 'Hidden', 'ADM3_PCODE': 'Hidden', 'ADM2_EN': 'Hidden', 'ADM2_AR': 'Hidden', 'ADM2_PCODE': 'Hidden', 'ADM1_EN': 'Hidden', 'ADM1_AR': 'Hidden', 'ADM1_PCODE': 'Hidden', 'ADM0_EN': 'Hidden', 'ADM0_AR': 'Hidden', 'ADM0_PCODE': 'Hidden', 'date': 'Hidden', 'validOn': 'Hidden', 'validTo': 'Hidden', });
lyr_City_11.set('fieldImages', {'ID': 'Range', 'NOM': 'TextEdit', 'CLASSE': 'Range', });
lyr_Lithology_5.set('fieldLabels', {'ID': 'inline label - always visible', 'CODE': 'inline label - always visible', 'NAME_': 'inline label - always visible', 'AREA_HA': 'inline label - always visible', });
lyr_Landuse_6.set('fieldLabels', {'AREA_HA': 'inline label - always visible', 'VALUE': 'inline label - always visible', 'NAME': 'inline label - always visible', 'NOTE': 'inline label - always visible', });
lyr_WadiJirstreams_7.set('fieldLabels', {'SUBBASIN': 'inline label - always visible', 'SUBBASINR': 'inline label - always visible', 'AREAC': 'inline label - always visible', 'LEN2': 'inline label - always visible', 'SLO2': 'inline label - always visible', 'WID2': 'inline label - always visible', 'DEP2': 'inline label - always visible', 'MINEL': 'inline label - always visible', 'MAXEL': 'inline label - always visible', });
lyr_WadielFerd_8.set('fieldLabels', {'NAME': 'inline label - always visible', });
lyr_AOIWadiJirRiverBasin_9.set('fieldLabels', {'NAME': 'inline label - always visible', 'AREA_HA': 'inline label - always visible', 'SHAPE_LENG': 'inline label - always visible', 'SHAPE_AREA': 'inline label - always visible', });
lyr_AdminastrativeBoundariesmunicipal_10.set('fieldLabels', {'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - always visible', 'ADM4_EN': 'inline label - always visible', });
lyr_City_11.set('fieldLabels', {'ID': 'inline label - always visible', 'NOM': 'inline label - always visible', 'CLASSE': 'inline label - always visible', });
lyr_City_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});