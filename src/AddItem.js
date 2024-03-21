import { FaPlus } from "react-icons/fa"
import { useRef } from "react"


const AddItem = ({ newItem, setNewItem, handleSubmit, itemExists }) => {
    const inputRef = useRef();
    return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
       
        <input
           autoFocus
           ref={inputRef}
           type="text"
           id='addItem'
           placeholder='Add Item'
           required
           value={newItem}
           onChange={(e) => setNewItem(e.target.value)}        
        />
        <button
          type='submit'
          aria-label='Add Item'
          onClick={() => inputRef.current.focus()}
        >
           <FaPlus />
        </button>
        {itemExists ? <p>Item exist</p> : null}
    
       
            
        
    </form>

    
  )
}

export default AddItem