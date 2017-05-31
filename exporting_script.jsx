//Layer 有rotate 函数，用于翻转
//app.fonts[i]有那么爱， postScriptName, family等属性，. 直接调用

//docref=app.documents.add(300,200)
docref = app.activeDocument;

var names = ["刘  琪", "白座钢", "朱雪佳", "葛建秀", "冯  彦", "秦  轶", "王  霞", "彭  竑", "经伟军", "阮炜莉", "郭  杰", "顾春伟", "金敏洁", "吴  梅", "周龙生", "杨玉梅", "王  东", "王鼎雄", "彭  宇", "王蓉蓉", "李悦灵", "姚  芸", "储  剑", "王惠澄", "顾佳静", "孙  军", "闵海冰", "程圣迪", "吴  哲", "叶  莉", "卢  晨", "程嘉群", "曹  彦", "顾红梅", "陆  敏", "沈微君", "杨  叶", "马丽萍", "沈  红", "林丽英", "钱  萍", "胡新花", "高红霞", "吴小燕", "陆  瑾", "万  梅", "陈晓枫", "叶  斌", "彭凤翔", "张  佳"];
var streets = ["古美路街道","古美路街道","古美路街道","古美路街道","虹  桥  镇","虹  桥  镇","虹  桥  镇","虹  桥  镇","华  漕  镇","华  漕  镇","江  川  路","江  川  路","江  川  路","江  川  路","江  川  路","马  桥  镇","马  桥  镇","梅  陇  镇","梅  陇  镇","梅  陇  镇","梅  陇  镇","梅  陇  镇","浦  江  镇","浦  江  镇","浦  江  镇","浦 锦 街 镇","浦 锦 街 镇","浦 锦 街 镇","七  宝  镇","七  宝  镇","七  宝  镇","七  宝  镇","七  宝  镇","莘庄工业区","莘庄工业区","莘庄工业区","莘  庄  镇","莘  庄  镇","莘  庄  镇","莘  庄  镇","莘  庄  镇","吴  泾  镇","吴  泾  镇","吴  泾  镇","新 虹 街 镇","新 虹 街 镇","新 虹 街 镇","颛  桥  镇","颛  桥  镇","颛  桥  镇"];

var prePath = "C:\\jpeg\\";

var ids = new Array();
for (var i= 0; i<50; i++) {
    ids[i]=i;
    }
   
for(var i = 0; i<50; i++){
    //定义编号属性
    r1=157;
    g1=11;
    b1=62;

    //定义位置
    x1=743;
    y1=2532;    

    var layerRef1 = docref.artLayers.add();
    layerRef1.kind = LayerKind.TEXT;
    var textItemRef1 = layerRef1.textItem;

    var textContent1 = names[i];
    textItemRef1.contents = textContent1;

    //font
    textItemRef1.font = 'hzgb';

    //size
    textItemRef1.size=91;
    //position
    textItemRef1.position=Array(x1,y1);

    //color
    var textcolor1= new SolidColor;
    textcolor1.rgb.red=r1;
    textcolor1.rgb.green=g1;
    textcolor1.rgb.blue=b1;
    textItemRef1.color=textcolor1;
    
    //定义姓名属性
    r2=255;
    g2=255;
    b2=255;

    //定义位置
    x2=990;
    y2=2800;

    var layerRef2 = docref.artLayers.add();
    layerRef2.kind = LayerKind.TEXT;
    var textItemRef2 = layerRef2.textItem;

    var textContent2 = streets[i];
    textItemRef2.contents = textContent2;

    //font
    textItemRef2.font= 'hzgb';

    //size
    textItemRef2.size=24;
    //position
    textItemRef2.position=Array(x2,y2);

    //color
    var textcolor2= new SolidColor;
    textcolor2.rgb.red=r2;
    textcolor2.rgb.green=g2;
    textcolor2.rgb.blue=b2;
    textItemRef2.color=textcolor2;
    
    
    
    
     //定义编号属性
    r3=157;
    g3=11;
    b3=62;

    //定义位置
    x3=1733;
    y3=978;    

    var layerRef3 = docref.artLayers.add();
    layerRef3.kind = LayerKind.TEXT;
    var textItemRef3 = layerRef3.textItem;
    
    layerRef3.rotate(180, AnchorPosition.MIDDLECENTER);

    var textContent3 = names[i];
    textItemRef3.contents = textContent3;

    //font
    textItemRef3.font = 'hzgb';

    //size
    textItemRef3.size=91;
    //position
    textItemRef3.position=Array(x3,y3);

    //color
    var textcolor3= new SolidColor;
    textcolor3.rgb.red=r3;
    textcolor3.rgb.green=g3;
    textcolor3.rgb.blue=b3;
    textItemRef3.color=textcolor3;
    
    
    
    //定义姓名属性
    r4=255;
    g4=255;
    b4=255;

    //定义位置
    x4=1479;
    y4=714;

    var layerRef4 = docref.artLayers.add();
    layerRef4.kind = LayerKind.TEXT;
    var textItemRef4 = layerRef4.textItem;

layerRef4.rotate(180, AnchorPosition.MIDDLECENTER);

    var textContent4 = streets[i];
    textItemRef4.contents = textContent4;

    //font
    textItemRef4.font= 'hzgb';

    //size
    textItemRef4.size=24;
    //position
    textItemRef4.position=Array(x4,y4);

    //color
    var textcolor4= new SolidColor;
    textcolor4.rgb.red=r4;
    textcolor4.rgb.green=g4;
    textcolor4.rgb.blue=b4;
    textItemRef4.color=textcolor4;
    
    var savePath = prePath +ids[i] + "-" + names[i] + ".jpeg";
    var fileOut = new File(savePath);
    SaveJPEG(fileOut,12);
    layerRef1.remove();
    layerRef2.remove();
    layerRef3.remove();
    layerRef4.remove();
}

function SaveJPEG(fileOut, jpegQuality) {  
    jpgSaveOptions = new JPEGSaveOptions();  
    jpgSaveOptions.embedColorProfile = true;  
    jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
    jpgSaveOptions.matte = MatteType.NONE;  
    jpgSaveOptions.quality = jpegQuality; 
    activeDocument.saveAs(fileOut, jpgSaveOptions, true, Extension.LOWERCASE);  
}

