(function() {var implementors = {};
implementors["half"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>","synthetic":false,"types":["half::bfloat::bf16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;'_ <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>","synthetic":false,"types":["half::bfloat::bf16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;'_ <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for &amp;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>","synthetic":false,"types":["half::bfloat::bf16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for &amp;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>","synthetic":false,"types":["half::bfloat::bf16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>","synthetic":false,"types":["half::binary16::f16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;'_ <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>","synthetic":false,"types":["half::binary16::f16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;'_ <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for &amp;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>","synthetic":false,"types":["half::binary16::f16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for &amp;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>","synthetic":false,"types":["half::binary16::f16"]}];
implementors["plotters"] = [{"text":"impl&lt;Coord, Other, DB:&nbsp;<a class=\"trait\" href=\"plotters/backend/trait.DrawingBackend.html\" title=\"trait plotters::backend::DrawingBackend\">DrawingBackend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;Other&gt; for <a class=\"struct\" href=\"plotters/element/struct.EmptyElement.html\" title=\"struct plotters::element::EmptyElement\">EmptyElement</a>&lt;Coord, DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Other: <a class=\"trait\" href=\"plotters/element/trait.Drawable.html\" title=\"trait plotters::element::Drawable\">Drawable</a>&lt;DB&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.1/std/primitive.reference.html\">&amp;'a </a>Other: <a class=\"trait\" href=\"plotters/element/trait.PointCollection.html\" title=\"trait plotters::element::PointCollection\">PointCollection</a>&lt;'a, <a class=\"type\" href=\"plotters_backend/type.BackendCoord.html\" title=\"type plotters_backend::BackendCoord\">BackendCoord</a>&gt;,&nbsp;</span>","synthetic":false,"types":["plotters::element::composable::EmptyElement"]},{"text":"impl&lt;Coord, DB:&nbsp;<a class=\"trait\" href=\"plotters/backend/trait.DrawingBackend.html\" title=\"trait plotters::backend::DrawingBackend\">DrawingBackend</a>, A, B, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;C&gt; for <a class=\"struct\" href=\"plotters/element/struct.ComposedElement.html\" title=\"struct plotters::element::ComposedElement\">ComposedElement</a>&lt;Coord, DB, A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"plotters/element/trait.Drawable.html\" title=\"trait plotters::element::Drawable\">Drawable</a>&lt;DB&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.1/std/primitive.reference.html\">&amp;'a </a>A: <a class=\"trait\" href=\"plotters/element/trait.PointCollection.html\" title=\"trait plotters::element::PointCollection\">PointCollection</a>&lt;'a, <a class=\"type\" href=\"plotters_backend/type.BackendCoord.html\" title=\"type plotters_backend::BackendCoord\">BackendCoord</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"plotters/element/trait.Drawable.html\" title=\"trait plotters::element::Drawable\">Drawable</a>&lt;DB&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.1/std/primitive.reference.html\">&amp;'a </a>B: <a class=\"trait\" href=\"plotters/element/trait.PointCollection.html\" title=\"trait plotters::element::PointCollection\">PointCollection</a>&lt;'a, <a class=\"type\" href=\"plotters_backend/type.BackendCoord.html\" title=\"type plotters_backend::BackendCoord\">BackendCoord</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"plotters/element/trait.Drawable.html\" title=\"trait plotters::element::Drawable\">Drawable</a>&lt;DB&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.62.1/std/primitive.reference.html\">&amp;'a </a>C: <a class=\"trait\" href=\"plotters/element/trait.PointCollection.html\" title=\"trait plotters::element::PointCollection\">PointCollection</a>&lt;'a, <a class=\"type\" href=\"plotters_backend/type.BackendCoord.html\" title=\"type plotters_backend::BackendCoord\">BackendCoord</a>&gt;,&nbsp;</span>","synthetic":false,"types":["plotters::element::composable::ComposedElement"]}];
implementors["ppv_lite86"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"ppv_lite86/generic/struct.u32x4_generic.html\" title=\"struct ppv_lite86::generic::u32x4_generic\">u32x4_generic</a>&gt; for <a class=\"struct\" href=\"ppv_lite86/generic/struct.u32x4_generic.html\" title=\"struct ppv_lite86::generic::u32x4_generic\">u32x4_generic</a>","synthetic":false,"types":["ppv_lite86::generic::u32x4_generic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"ppv_lite86/generic/struct.u64x2_generic.html\" title=\"struct ppv_lite86::generic::u64x2_generic\">u64x2_generic</a>&gt; for <a class=\"struct\" href=\"ppv_lite86/generic/struct.u64x2_generic.html\" title=\"struct ppv_lite86::generic::u64x2_generic\">u64x2_generic</a>","synthetic":false,"types":["ppv_lite86::generic::u64x2_generic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"ppv_lite86/generic/struct.u128x1_generic.html\" title=\"struct ppv_lite86::generic::u128x1_generic\">u128x1_generic</a>&gt; for <a class=\"struct\" href=\"ppv_lite86/generic/struct.u128x1_generic.html\" title=\"struct ppv_lite86::generic::u128x1_generic\">u128x1_generic</a>","synthetic":false,"types":["ppv_lite86::generic::u128x1_generic"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()