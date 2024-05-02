import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins cannot be fetched");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  //https://wnbcdxihtfyqffzpvdgo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1. Create/Edit Cabin
  let query = supabase.from("cabins");
  //A. Create the cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B. Edit the cabin
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins cannot be created");
  }

  if (hasImagePath) return data;
  //2. Upload image
  const { error: StorageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3 Delete the cabin if the image is not properly uploaded
  if (StorageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "There was a problem while uploading the image and the cabins cannot be created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins cannot be deleted");
  }
}
