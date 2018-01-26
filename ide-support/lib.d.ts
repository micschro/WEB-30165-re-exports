declare namespace xfiles {
  /**
   * This is the documentation for Foo interface.
   */
  export class Foo {
    /**
     * Foo member doc
     */
    fooMember():void
  }

  /**
   * This is the documentation for Bar class.
   */
  export class Bar {

  }
}

declare module "xfiles/module1" {
  import Foo = xfiles.Foo;
  import Bar = xfiles.Foo;
  export {
    Foo, Bar
  }
}