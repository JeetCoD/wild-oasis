import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        //  Pass the name of the filterField and array of object with options.
        filterNameField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "discount", label: "Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name(A-Z)" },
          { value: "name-desc", label: "Sort by name(Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price(Low-High)" },
          { value: "regularPrice-desc", label: "Sort by Price(High-Low)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity(Low first)" },
          { value: "maxCapacity-desc", label: "Sort by Capacity(High first)" }, 
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
