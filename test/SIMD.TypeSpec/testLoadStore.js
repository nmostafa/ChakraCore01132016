function func1(arr)
{
// Mix normal and SIMD array access
// loops
// different SIMD types
    var i;
    var f4, f4_2;
    var byteSize = arr.length * arr.BYTES_PER_ELEMENT;
    for (i = 0; i < byteSize - 16; i++)
    {
        f4 = SIMD.Float32x4(i, i+1, i+2, i+3);
        //f4_2 = SIMD.Float32x4(i, i+1, i+2, i+3);
        SIMD.Float32x4.store(arr, i, f4);
        //SIMD.Float32x4.add(f4, f4_2);
    }

}


// Add different typed arrays
arrBuff = new ArrayBuffer(1024);
arr = new Int8Array(arrBuff);
func1(arr);
func1(arr);

