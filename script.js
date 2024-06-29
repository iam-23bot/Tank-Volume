document.getElementById('tankType').addEventListener('change', function() {
    var type = this.value;
    document.querySelectorAll('.dimension').forEach(function(dim) {
        dim.style.display = 'none';
    });
    if (type === 'cylinder') {
        document.getElementById('cylinderDimensions').style.display = 'block';
    } else if (type === 'rectangle') {
        document.getElementById('rectangleDimensions').style.display = 'block';
    } else if (type === 'sphere') {
        document.getElementById('sphereDimensions').style.display = 'block';
    }
});

function calculateVolume() {
    var type = document.getElementById('tankType').value;
    var unit = document.getElementById('unit').value;
    var volume = 0;

    if (type === 'cylinder') {
        var radius = parseFloat(document.getElementById('radius').value);
        var height = parseFloat(document.getElementById('height').value);
        volume = Math.PI * Math.pow(radius, 2) * height;
    } else if (type === 'rectangle') {
        var length = parseFloat(document.getElementById('length').value);
        var width = parseFloat(document.getElementById('width').value);
        var heightRec = parseFloat(document.getElementById('heightRec').value);
        volume = length * width * heightRec;
    } else if (type === 'sphere') {
        var radiusSphere = parseFloat(document.getElementById('radiusSphere').value);
        volume = (4 / 3) * Math.PI * Math.pow(radiusSphere, 3);
    }

    // Conversion factors to cubic meters
    var conversionFactors = {
        'm': 1,
        'cm': 1e-6,
        'mm': 1e-9,
        'in': 0.0254 ** 3,
        'ft': 0.3048 ** 3
    };

    // Convert volume to cubic meters
    var volumeInCubicMeters = volume * conversionFactors['m'];

    // Convert cubic meters to selected unit
    var volumeInSelectedUnit = volumeInCubicMeters / conversionFactors[unit];

    document.getElementById('result').innerText = `The volume is ${volumeInSelectedUnit.toFixed(2)} cubic ${unit}`;

    var imageHtml = '';
    if (type === 'cylinder') {
        imageHtml = `
            <img src="cylinder.png" alt="Cylindrical Tank">
            <p>Radius: ${document.getElementById('radius').value} ${unit}</p>
            <p>Height: ${document.getElementById('height').value} ${unit}</p>
        `;
    } else if (type === 'rectangle') {
        imageHtml = `
            <img src="rectangle.png" alt="Rectangular Tank">
            <p>Length: ${document.getElementById('length').value} ${unit}</p>
            <p>Width: ${document.getElementById('width').value} ${unit}</p>
            <p>Height: ${document.getElementById('heightRec').value} ${unit}</p>
        `;
    } else if (type === 'sphere') {
        imageHtml = `
            <img src="sphere.png" alt="Spherical Tank">
            <p>Radius: ${document.getElementById('radiusSphere').value} ${unit}</p>
        `;
    }

    document.getElementById('tankImage').innerHTML = imageHtml;
}
