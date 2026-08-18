import { useState } from 'react';
import {
  FaChevronDown,
  FaCheckCircle,
  FaShieldAlt,
  FaTruck,
  FaInfoCircle,
  FaListUl,
  FaUndo,
} from 'react-icons/fa';

const ProductInfoAccordion = ({ product }) => {
  const [openSection, setOpenSection] = useState('description');

  const toggleSection = (id) => {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };

  return (
    <section className="w-full my-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-zinc-200 flex-1"></div>

        <h2 className="text-center font-mono text-base sm:text-lg font-black tracking-widest text-zinc-900 uppercase border border-zinc-300 bg-white px-6 py-2 rounded-lg shadow-sm">
          PRODUCT INFORMATION
        </h2>

        <div className="h-px bg-zinc-200 flex-1"></div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-zinc-200">
          <button
            type="button"
            onClick={() => toggleSection('description')}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-zinc-50"
          >
            <div className="flex items-center gap-3">
              <FaInfoCircle className="text-zinc-900" />

              <span className="font-mono text-sm font-black text-zinc-900">
                PRODUCT DESCRIPTION & TAGS
              </span>
            </div>

            <FaChevronDown
              className={`transition-transform ${
                openSection === 'description' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openSection === 'description' && (
            <div className="px-5 pb-6 text-sm text-zinc-700">
              <p className="font-medium leading-relaxed">
                {product.description}
              </p>

              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-bold text-zinc-400 uppercase">
                    TAGS:
                  </span>

                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs px-2.5 py-1 rounded-md font-semibold uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="border-b border-zinc-200">
          <button
            type="button"
            onClick={() => toggleSection('specifications')}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-zinc-50"
          >
            <div className="flex items-center gap-3">
              <FaListUl className="text-zinc-900" />

              <span className="font-mono text-sm font-black text-zinc-900">
                PRODUCT SPECIFICATIONS
              </span>
            </div>

            <FaChevronDown
              className={`transition-transform ${
                openSection === 'specifications' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openSection === 'specifications' && (
            <div className="px-5 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-zinc-50 p-4 rounded-lg">
                <span className="text-xs text-zinc-400">SKU</span>

                <p className="font-bold text-zinc-900">{product.sku}</p>
              </div>

              <div className="bg-zinc-50 p-4 rounded-lg">
                <span className="text-xs text-zinc-400">CATEGORY</span>

                <p className="font-bold text-zinc-900 capitalize">
                  {product.category}
                </p>
              </div>

              <div className="bg-zinc-50 p-4 rounded-lg">
                <span className="text-xs text-zinc-400">AVAILABILITY</span>

                <p className="font-bold text-emerald-600 flex items-center gap-1">
                  <FaCheckCircle />
                  {product.availabilityStatus}
                </p>

                <span className="text-xs text-zinc-500">
                  {product.stock} in stock
                </span>
              </div>

              <div className="bg-zinc-50 p-4 rounded-lg">
                <span className="text-xs text-zinc-400">WEIGHT</span>

                <p className="font-bold text-zinc-900">{product.weight} kg</p>
              </div>

              <div className="bg-zinc-50 p-4 rounded-lg sm:col-span-2">
                <span className="text-xs text-zinc-400">DIMENSIONS</span>

                <p className="font-bold text-zinc-900">
                  {product.dimensions.width} × {product.dimensions.height} ×{' '}
                  {product.dimensions.depth} cm
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            type="button"
            onClick={() => toggleSection('policies')}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-zinc-50"
          >
            <div className="flex items-center gap-3">
              <FaTruck className="text-zinc-900" />

              <span className="font-mono text-sm font-black text-zinc-900">
                SHIPPING, WARRANTY & RETURNS
              </span>
            </div>

            <FaChevronDown
              className={`transition-transform ${
                openSection === 'policies' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openSection === 'policies' && (
            <div className="px-5 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-zinc-50 p-4 rounded-lg">
                <FaTruck className="text-zinc-900 mb-2" />

                <p className="font-bold text-zinc-900">SHIPPING</p>

                <p className="text-zinc-600 mt-1">
                  {product.shippingInformation}
                </p>
              </div>

              <div className="bg-zinc-50 p-4 rounded-lg">
                <FaShieldAlt className="text-zinc-900 mb-2" />

                <p className="font-bold text-zinc-900">WARRANTY</p>

                <p className="text-zinc-600 mt-1">
                  {product.warrantyInformation}
                </p>
              </div>

              <div className="bg-zinc-50 p-4 rounded-lg">
                <FaUndo className="text-zinc-900 mb-2" />

                <p className="font-bold text-zinc-900">RETURNS</p>

                <p className="text-zinc-600 mt-1">{product.returnPolicy}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductInfoAccordion;
