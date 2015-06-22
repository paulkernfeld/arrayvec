var searchIndex = {};
searchIndex['arrayvec'] = {"items":[[0,"","arrayvec","",null,null],[8,"RangeArgument","","**IndexRange** is implemented by Rust's built-in range types, produced\nby range syntax like `..`, `a..`, `..b` or `c..d`.",null,null],[3,"ArrayVec","","A vector with a fixed capacity.",null,null],[3,"IntoIter","","By-value iterator for **ArrayVec**.",null,null],[3,"Drain","","A draining iterator for **ArrayVec**.",null,null],[8,"Array","","Trait for fixed size arrays.",null,null],[16,"Item","","The array's element type",0,null],[11,"drop","","",1,{"inputs":[{"name":"arrayvec"}],"output":null}],[11,"new","","Create a new empty **ArrayVec**.",1,{"inputs":[{"name":"arrayvec"}],"output":{"name":"arrayvec"}}],[11,"len","","Return the number of elements in the **ArrayVec**.",1,{"inputs":[{"name":"arrayvec"}],"output":{"name":"usize"}}],[11,"capacity","","Return the capacity of the **ArrayVec**.",1,{"inputs":[{"name":"arrayvec"}],"output":{"name":"usize"}}],[11,"push","","Push **element** to the end of the vector.",1,{"inputs":[{"name":"arrayvec"},{"name":"item"}],"output":{"name":"option"}}],[11,"pop","","Remove the last element in the vector.",1,{"inputs":[{"name":"arrayvec"}],"output":{"name":"option"}}],[11,"insert","","Insert **element** in position **index**.",1,{"inputs":[{"name":"arrayvec"},{"name":"usize"},{"name":"item"}],"output":{"name":"option"}}],[11,"swap_remove","","Remove the element at **index** and swap the last element into its place.",1,{"inputs":[{"name":"arrayvec"},{"name":"usize"}],"output":{"name":"option"}}],[11,"remove","","Remove the element at **index** and shift down the following elements.",1,{"inputs":[{"name":"arrayvec"},{"name":"usize"}],"output":{"name":"option"}}],[11,"clear","","Remove all elements in the vector.",1,{"inputs":[{"name":"arrayvec"}],"output":null}],[11,"set_len","","Set the vector's length without dropping or moving out elements",1,{"inputs":[{"name":"arrayvec"},{"name":"usize"}],"output":null}],[11,"drain","","Create a draining iterator that removes the specified range in the vector\nand yields the removed items from start to end. The element range is\nremoved even if the iterator is not consumed until the end.",1,{"inputs":[{"name":"arrayvec"},{"name":"r"}],"output":{"name":"drain"}}],[11,"into_inner","","Return the inner fixed size array, if it is full to its capacity.",1,{"inputs":[{"name":"arrayvec"}],"output":{"name":"result"}}],[11,"deref","","",1,null],[11,"deref_mut","","",1,null],[11,"from","","",1,{"inputs":[{"name":"arrayvec"},{"name":"a"}],"output":{"name":"self"}}],[11,"into_iter","","",1,{"inputs":[{"name":"arrayvec"}],"output":{"name":"intoiter"}}],[11,"next","","",2,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"drop","","",2,{"inputs":[{"name":"intoiter"}],"output":null}],[11,"next","","",3,{"inputs":[{"name":"drain"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next_back","","",3,{"inputs":[{"name":"drain"}],"output":{"name":"option"}}],[11,"drop","","",3,{"inputs":[{"name":"drain"}],"output":null}],[11,"extend","","",1,{"inputs":[{"name":"arrayvec"},{"name":"t"}],"output":null}],[11,"from_iter","","",1,{"inputs":[{"name":"arrayvec"},{"name":"t"}],"output":{"name":"self"}}],[11,"clone","","",1,{"inputs":[{"name":"arrayvec"}],"output":{"name":"self"}}],[11,"hash","","",1,{"inputs":[{"name":"arrayvec"},{"name":"h"}],"output":null}],[11,"eq","","",1,{"inputs":[{"name":"arrayvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"borrow","","",1,null],[11,"borrow_mut","","",1,null],[11,"as_ref","","",1,null],[11,"as_mut","","",1,null],[11,"fmt","","",1,{"inputs":[{"name":"arrayvec"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[8,"Array"],[3,"ArrayVec"],[3,"IntoIter"],[3,"Drain"]]};
searchIndex['nodrop'] = {"items":[[0,"","nodrop","",null,null],[3,"NoDrop","","A type holding **T** that will not call its destructor on drop",null,null],[11,"new","","Create a new **NoDrop**.",0,{"inputs":[{"name":"nodrop"},{"name":"t"}],"output":{"name":"nodrop"}}],[11,"into_inner","","Extract the inner value.",0,{"inputs":[{"name":"nodrop"}],"output":{"name":"t"}}],[11,"drop","","",0,{"inputs":[{"name":"nodrop"}],"output":null}],[11,"deref","","",0,{"inputs":[{"name":"nodrop"}],"output":{"name":"t"}}],[11,"deref_mut","","",0,{"inputs":[{"name":"nodrop"}],"output":{"name":"t"}}]],"paths":[[3,"NoDrop"]]};
searchIndex['odds'] = {"items":[[0,"","odds","Odds and ends — collection miscellania.",null,null],[3,"Fix","","Fixpoint combinator for rust closures, generalized over the return type.",null,null],[5,"ref_eq","","Compare if **a** and **b** are equal *as pointers*.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"bool"}}],[5,"ptr_eq","","Compare if **a** and **b** are equal pointers.",null,null],[5,"raw_byte_repr","","Safe to use with any wholly initialized memory `ptr`",null,null],[5,"get_unchecked","","Use `debug_assert!` to check indexing in debug mode. In release mode, no checks are done.",null,null],[5,"get_unchecked_mut","","Use `debug_assert!` to check indexing in debug mode. In release mode, no checks are done.",null,null],[5,"debug_assert_unreachable","","Act as `debug_assert!` in debug mode, asserting that this point is not reached.",null,{"inputs":[],"output":null}],[5,"slice_unchecked","","Check slicing bounds in debug mode, otherwise just act as an unchecked\nslice call.",null,null],[11,"start","core::ops","",0,{"inputs":[{"name":"rangefrom"}],"output":{"name":"option"}}],[11,"end","","",1,{"inputs":[{"name":"rangeto"}],"output":{"name":"option"}}],[11,"start","","",2,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"end","","",2,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"call","odds","",3,{"inputs":[{"name":"fix"},{"name":"t"}],"output":{"name":"r"}}],[11,"clone","","",3,{"inputs":[{"name":"fix"}],"output":{"name":"self"}}],[11,"call_once","","",3,null],[11,"call_mut","","",3,null],[11,"call","","",3,null],[8,"IndexRange","","**IndexRange** is implemented by Rust's built-in range types, produced\nby range syntax like `..`, `a..`, `..b` or `c..d`.",null,null]],"paths":[[3,"RangeFrom"],[3,"RangeTo"],[3,"Range"],[3,"Fix"]]};
initSearch(searchIndex);
