import { Module } from "@nestjs/common";
import { ProductosController } from "./productos.controller";
import { ProductoService } from "./productos.service";
import { PrismaModule } from '../prisma/prisma.module';  // Importar PrismaModule

@Module({
    imports: [PrismaModule],  // Asegúrate de que PrismaModule esté en imports
    controllers: [ProductosController],
    providers: [ProductoService],
})
export class ProductosModule {}
