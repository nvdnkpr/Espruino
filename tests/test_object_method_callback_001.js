function A() {
}
A.prototype.b  = function() { return this.num; };
var a = new A();
a.num = 42;

function runCallback(cb) { return cb(); }
//var cb = a.b;
//var res = runCallback(cb);
var res = runCallback(a.b);

result = res==42;



