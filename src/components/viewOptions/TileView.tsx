import React, { useState } from 'react';
import { Product } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFlag, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface TileViewProps {
  product?: Product;
  onTileClick?: () => void;
}

const TileView: React.FC<TileViewProps> = ({ product, onTileClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTileClick = () => {
    setIsExpanded(!isExpanded);
    if (onTileClick) onTileClick();
  };

  return (
    <div className="p-4">
      <div
        className={`bg-white border p-4 rounded shadow-md flex items-center ${isExpanded ? 'flex-col' : ''}`}
        onClick={handleTileClick}
      >
        <img
          src={product?.images}
          alt={product?.title}
          className="w-24 h-24 mr-4 rounded object-cover"
        />
        <div className={`flex-grow ${isExpanded ? 'text-center' : ''}`}>
          <div>
            
          </div>
          <h2 className="text-2xl font-bold mb-2">{product?.title}</h2>
          <p className="text-sm text-gray-500 mb-2">Title: {product?.title}</p>
          <p className="text-sm text-gray-500 mb-2">Category: {product?.category}</p>
          {isExpanded && (
            <>
              <p className="mb-4">{product?.description}</p>
              <p className="text-sm text-gray-500 mb-2">
                Price: ${product?.price.toFixed(2)} ({product?.discountPercentage}% off)
              </p>
              <p className="text-sm text-gray-500 mb-2">Rating: {product?.rating} / 5</p>
              <p className="text-sm text-gray-500 mb-2">Stock: {product?.stock}</p>
              <p className="text-sm text-gray-500 mb-2">
                Dimensions: {product?.dimensions.width} x {product?.dimensions.height} x {product?.dimensions.depth} cm
              </p>
              <div className="flex gap-2 mb-4 justify-center">
                {product?.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-200 rounded text-xs">{tag}</span>
                ))}
              </div>
            </>
          )}
        </div>

        {isExpanded && (
          <div className="flex flex-row gap-2">
            <button className="px-2 py-1 bg-green-500 text-white rounded">
              <FontAwesomeIcon icon={faEdit} size="xs" />
            </button>
            <button className="px-2 py-1 bg-yellow-500 text-white rounded">
              <FontAwesomeIcon icon={faFlag} size="xs" />
            </button>
            <button className="px-2 py-1 bg-red-500 text-white rounded">
              <FontAwesomeIcon icon={faTrashAlt} size="xs" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TileView;
