export const filterNotes = (notes, searchTerm) => {
  const filteredNotes = notes?.filter(
    (note) =>
      note?.title.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      note?.tag?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  return filteredNotes;
};

export const getSortedNotes = (notes, sortBy) => {
  if ((sortBy = "Newest First")) {
    const updatedNotes = notes.sort((a, b) => a.currentDate - b.currentDate);
    return updatedNotes;
  }
  if (sortBy === "Oldest First") {
    const updatedNotes = notes.sort((a, b) => b.currentDate - a.currentDate);
    return updatedNotes.reverse();
  } else {
    return notes;
  }
};

export const getFilteredNotes = (notes, filters) => {
  return filters.length > 0
    ? notes.filter((note) => filters.includes(note.tag))
    : notes;
};
