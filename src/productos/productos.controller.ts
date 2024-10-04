
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductoService } from "./productos.service";
import { Producto } from "@prisma/client";

@Controller('productos')
export class ProductosController{
    constructor(private readonly productoService: ProductoService){}

    @Get()
    async getAllProductos() {
        return this.productoService.getAllProductos();
    }

    @Get(':id')
    async getProductoById(@Param('id') id: string) {
        const productoFound = await this.productoService.getProductoById(Number(id));
        if (!productoFound) throw new BadRequestException('Producto no encontrado');
        return productoFound;
    }

    @Post()
    async addProducto(@Body() data: Producto) {
        return this.productoService.addProducto(data);
    }

    @Put(':id')
    async editProducto(@Param('id') id: string, @Body() data: Producto) {
        try {
            return await this.productoService.editProducto(Number(id), data);
        } catch (error) {
            console.log(error);
            
            throw new BadRequestException('Producto no encontrado');
        }
    }

    @Delete(':id')
    async deleteProducto(@Param('id') id: string) {
        try {
            return await this.productoService.deleteProducto(Number(id));
        } catch (error) {
            console.log(error);
            
            throw new BadRequestException('Producto no encontrado');
        }
    }
}