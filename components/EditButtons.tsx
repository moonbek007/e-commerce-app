import { CheckIcon, PencilIcon, Redo2Icon } from "lucide-react";

import { useCartContext } from "@/hooks/useCartContext";
import { useCartDispatch } from "@/hooks/useCartDispatch";

import { CART_ACTION_TYPES } from "@/constants/constants";

const EditButtons = () => {
  const { isEditOn } = useCartContext()!;
  const dispatch = useCartDispatch()!;

  const handleEnableEditMode = () => {
    dispatch({
      type: CART_ACTION_TYPES.EDIT_ENABLE_EDIT_MODE,
    });
  };

  const handleUndoChanges = () => {
    dispatch({
      type: CART_ACTION_TYPES.EDIT_UNDO_CHANGES,
    });
  };

  const handleSaveChanges = () => {
    dispatch({
      type: CART_ACTION_TYPES.EDIT_SAVE_CHANGES,
    });
  };

  return (
    <div className="flex gap-2">
      {!isEditOn ? (
        <button
          onClick={handleEnableEditMode}
          className="flex gap-1 items-center text-xs underline text-gray-600 hover:text-black cursor-pointer p-1.5"
        >
          <span>
            <PencilIcon className="w-3.5 h-3.5" />
          </span>
          <span>Edit Cart</span>
        </button>
      ) : (
        <>
          <button
            onClick={handleSaveChanges}
            className="flex gap-0.5 items-center text-xs ring-1 rounded-md ring-gray-400 text-gray-600 hover:text-black cursor-pointer p-1.5"
          >
            <span>
              <CheckIcon className="w-3.5 h-3.5" />
            </span>
            <span>Save</span>
          </button>
          <button
            onClick={handleUndoChanges}
            className="flex gap-0.5 items-center text-xs ring-1 rounded-md ring-gray-400 text-gray-600 hover:text-black cursor-pointer p-1.5"
          >
            <span>
              <Redo2Icon className="w-3.5 h-3.5" />
            </span>
            <span>Undo</span>
          </button>
        </>
      )}
    </div>
  );
};

export default EditButtons;
