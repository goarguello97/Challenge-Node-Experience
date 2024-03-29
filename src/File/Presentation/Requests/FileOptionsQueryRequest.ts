import { IsBoolean, IsOptional } from 'class-validator';
import FileOptionsQueryPayload from '../../Domain/Payloads/FileOptionsQueryPayload';
import { decorate } from 'ts-mixer';

class FileOptionsQueryRequest implements FileOptionsQueryPayload
{
    private readonly _hasOriginalName: boolean;
    private readonly _isPublic: boolean;
    private readonly _isOverwrite: boolean;
    private readonly _isOptimize: boolean;


    constructor({ query }: any)
    {
        this._hasOriginalName = query?.hasOriginalName === 'true';
        this._isPublic = query?.isPublic === 'true';
        this._isOverwrite = query?.isOverwrite === 'true';
        this._isOptimize = query?.isOptimize === 'true';
    }

    @decorate(IsBoolean())
    @decorate(IsOptional())
    get isOriginalName(): boolean
    {
        return this._hasOriginalName;
    }

    @decorate(IsBoolean())
    @decorate(IsOptional())
    get isPublic(): boolean
    {
        return this._isPublic;
    }

    @decorate(IsBoolean())
    @decorate(IsOptional())
    get isOverwrite(): boolean
    {
        return this._isOverwrite;
    }

    @decorate(IsBoolean())
    @decorate(IsOptional())
    get isOptimize(): boolean
    {
        return this._isOptimize;
    }
}

export default FileOptionsQueryRequest;
