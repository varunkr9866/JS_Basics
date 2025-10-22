//cONSTRUCTOR USING JS
class Box{
    constructor(l,b,h){
        this.l = l;
        this.b = b;
        this.h = h;
    }
    printVolume(){
        console.log(`Volume of the box is : ${this.l * this.b * this.h}`);
    }
    fetchSurfaceArea(){
        return 2*(this.l * this.b + this.b * this.h + this.h * this.b)
    }
    setBoxSize(){
         this.l = l;
        this.b = b;
        this.h = h;
    }
}