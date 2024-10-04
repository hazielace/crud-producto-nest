/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Producto } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductoService{
    constructor(private prisma: PrismaService){ }

    async getAllProductos(): Promise<Producto[]> {
        return this.prisma.producto.findMany();
    }

    async getProductoById(id: number): Promise<Producto> {
        return this.prisma.producto.findUnique({
            where: {
                id: id,
            },
        });
    }

    async addProducto(data: Producto): Promise<Producto> {
        return this.prisma.producto.create({
            data,
        });
    }

    async editProducto(id: number, data: Producto): Promise<Producto> {
        return this.prisma.producto.update({
            where: {
                id: id,
            },
            data,
        });
    }

    async deleteProducto(id: number): Promise<Producto> {
    return this.prisma.producto.delete({
        where: {
            id: id,
        },
    });
    }
}