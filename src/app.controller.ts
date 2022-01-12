import { Controller, Get, Post, Query, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { AppService } from './app.service';
import { emailGrpcClient, invoiceGrpcClient } from './grpc-client.options';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Client(emailGrpcClient)
  private readonly emailClient: ClientGrpc;

  @Client(invoiceGrpcClient)
  private readonly invoiceClient: ClientGrpc;

  private emailService;

  private invoiceService;

  onModuleInit() {
    this.emailService = this.emailClient.getService('EmailService');
    this.invoiceService = this.invoiceClient.getService('InvoiceService');
  }

  @Get('sendEmail')
  sendEmail(@Query('email') email) {
    return this.emailService.sendEmail({ email });
  }

  @Post('createInvoice')
  createInvoce() {
    return this.invoiceService.createInvoice({});
  }
}
