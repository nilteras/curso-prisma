import { Product } from "@prisma/client";
import prisma from "./../database/database";

export type CreateProduct = Omit<Product, "id">

async function getProducts() {
  const products = await prisma.product.findMany();

  return products;
}

async function getProduct(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })
}

async function createProduct(product: CreateProduct) {
  await prisma.product.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;