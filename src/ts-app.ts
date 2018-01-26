import {Foo} from 'xfiles/module1'

// WS will auto-auggest: import Foo = xfiles.Foo;
// This would work only if xfiles is available "ambiently".
// If we use import {Foo} from "xfiles/module1"; manually,
// WS complains that "Element is not accessible", even though tsc works fine.

const a = new Foo();
a.fooMember();