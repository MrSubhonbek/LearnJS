function rgb(r, g, b) {
    if (r > 255)
        r = 255;
    else if (r < 0)
        r = 0;
    if (g > 255)
        g = 255;
    else if (g < 0)
        g = 0;
    if (b > 255)
        b = 255;
    else if (b < 0)
        b = 0;
    r = r.toString(16).toUpperCase();
    b = b.toString(16).toUpperCase();
    g = g.toString(16).toUpperCase();
    if (parseInt(r, 16) < parseInt('F', 16)) {
        r = '0' + r;
    }
    if (parseInt(b, 16) < parseInt('F', 16)) {
        b = '0' + b;
    }
    if (parseInt(g, 16) < parseInt('F', 16)) {
        g = '0' + g;
    }
    return r + g + b
}
console.log(rgb(17, 229, 55))