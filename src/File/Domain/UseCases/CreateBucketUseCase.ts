import CreateBucketPayload from '../../InterfaceAdapters/Payloads/CreateBucketPayload';
import { containerFactory } from '../../../Shared/Decorators/ContainerFactory';
import { SERVICES } from '../../../services';
import IFileService from '../../InterfaceAdapters/IFileService';

class CreateBucketUseCase
{
    @containerFactory(SERVICES.IFileService)
    private fileService: IFileService;

    async handle(payload: CreateBucketPayload): Promise<void>
    {
        await this.fileService.createBucket(payload);
    }
}

export default CreateBucketUseCase;
