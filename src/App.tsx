import AddProductDialog from "./components/AddProductDialog";
import ProductsList from "./components/ProductsList";
import SortSelect from "./components/SortSelect";

function App() {
  return (
    <div>
      <div className="w-full flex justify-between mb-4">
        <SortSelect />
        <AddProductDialog />
      </div>
      <div>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
