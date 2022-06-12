class Vector {

    constructor(array){
        this.a = array
    }


length() {
    let b = 0;
    for(var i=0;i<this.a.length;i++)
    {
        b = b + this.a[i]*this.a[i];
    }
    return Math.sqrt(b);
  }

  neg() {
    let c=[];
    for (var i=0; i<this.a.length; i++)
    {
        c[i]=this.a[i]*-1;
    }
    return new Vector (c);
  }

  add(p2) {
    let d=[];
    for(var i=0 ; i<this.a.length ; i++)
    {
        d[i]=this.a[i]+p2.a[i];
    }
    return new Vector (d);
  }

  sub(p2) {
    return this.add(p2.neg());
  }

  dot(p2) {
    let e = 0;
    for(var i=0; i<this.a.length; i++)
    {
        e = e + this.a[i]*p2.a[i];
    }
    return e;
  }

  distance(p2) {
    return this.sub(p2).length();
  }

  toString() {
    return this.a.toString();
}
}
let p = new Vector([1,3,6]), p2 = new Vector([5,2,7])
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.dot(p2)=', p.dot(p2))
