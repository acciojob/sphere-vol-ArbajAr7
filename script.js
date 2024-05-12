function volume_sphere() {
    //Write your code here
	const radiusV = document.getElementById("radius").value;

	if(radiusV < 0 || isNaN(radiusV))
	{
		document.getElementById("volume").setAttribute("value", "NaN");
	}
	if(typeof radiusV == "string")
	{
		document.getElementById("volume").setAttribute("value", "NaN");
	}
	const volume = (4/3)*Math.PI*radiusV*radiusV*radiusV;
	document.getElementById("volume").setAttribute("value", volume);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
