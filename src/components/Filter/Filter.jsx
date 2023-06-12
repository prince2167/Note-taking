import { toast } from "react-toastify";
import { useNotes } from "../../contexts/note-context";
import { sorts } from "../../utils/data";
import classes from "./Filter.module.css";

const Filter = ({ setShowModal }) => {
  const { state, dispatch, setApplyFilter } = useNotes();
  const { notes, filters } = state;
  const labels = notes.map((note) => note.tag);
  const tags = [...new Set(labels)];

  const filterByTagsHandler = (event) => {
    const tag = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      const updatedFilters = [...filters, tag];
      dispatch({ type: "FILTERS", payload: updatedFilters });
    } else {
      const updatedFilters = filters.filter((filter) => filter !== tag);
      dispatch({ type: "FILTERS", payload: updatedFilters });
    }
  };
  const clearFilterHandler = () => {
    setShowModal(false);
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const applyfilterHandler = () => {
    setShowModal(false);
    setApplyFilter(true);
    toast.success("Filter successfully apply!!");
  };

  return (
    <div className={classes.filterContainer}>
      <h2>Short & Filter Notes</h2>
      <div className={classes.filterTypes}>
        <div>
          <strong>Sort</strong>
          <select
            onChange={(event) =>
              dispatch({ type: "SORT_BY", payload: event.target.value })
            }
          >
            {sorts.map((sort, index) => (
              <option key={index} value={sort}>
                {sort}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.filterByLabel}>
          <strong>Select Label</strong>
          {tags
            .filter((tag) => tag !== "")
            .map((tag, index) => (
              <label key={index} className={classes.filters}>
                <input
                  type="checkbox"
                  value={tag}
                  checked={filters.includes(tag)}
                  onChange={filterByTagsHandler}
                />
                <p>{tag}</p>
              </label>
            ))}
        </div>
      </div>
      <div className={classes.buttonGroup}>
        <button className={classes.clearButton} onClick={clearFilterHandler}>
          Clear
        </button>
        <button className={classes.applyButton} onClick={applyfilterHandler}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
